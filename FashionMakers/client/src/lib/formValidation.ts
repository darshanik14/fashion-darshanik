import { z } from "zod";

/**
 * Validation schema for contact form
 */
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  
  email: z.string()
    .email({ message: "Please enter a valid email address" }),
  
  phone: z.string()
    .min(10, { message: "Please enter a valid phone number" })
    .max(15, { message: "Phone number is too long" })
    .refine((val) => /^[\d\+\-\(\) ]+$/.test(val), {
      message: "Phone number can only contain digits, spaces, and +()-",
    }),
  
  company: z.string().optional(),
  
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Validates a single form field
 * @param field - The field to validate
 * @param value - The value to validate
 * @returns Error message or null if valid
 */
export const validateField = (field: keyof ContactFormValues, value: string): string | null => {
  try {
    const fieldSchema = contactFormSchema.shape[field];
    fieldSchema.parse(value);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors[0]?.message || "Invalid input";
    }
    return "Validation error";
  }
};
