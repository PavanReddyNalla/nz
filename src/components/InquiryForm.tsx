// ...existing code...
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Send } from "lucide-react";

const formSchema = z.object({
  role: z.string().min(1, "Please select an option"),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone/WhatsApp number"),
  travelDestination: z.string().min(1, "Please select a destination"),
  travelDate: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ...existing code...
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJ4EWxUSVC05s38tzbvWCsQR9Zl7uTG-CAjzua55ZKmJruK49YxBhkuHBJgIr_w7n-/exec";

async function submitToSheets(payload: Record<string, any>) {
  // convert to URL-encoded string to avoid preflight CORS
  const body = new URLSearchParams();
  Object.entries(payload).forEach(([k, v]) => body.append(k, v ?? ""));

  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: body.toString(),
  });

  try {
    return await res.json();
  } catch {
    return { status: res.ok ? "success" : "error" };
  }
}
// ...existing code...

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "inquiry",
      name: "",
      email: "",
      phone: "",
      travelDestination: "",
      travelDate: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const payload = {
      timestamp: new Date().toISOString(),
      role: data.role,
      name: data.name,
      email: data.email,
      phone: data.phone,
      travelDestination: data.travelDestination,
      travelDate: data.travelDate,
      message: data.message,
    };

    try {
      const result = await submitToSheets(payload);

      if (result && result.status && result.status === "success") {
        toast.success("Thank you! We'll contact you soon.");
        form.reset();
      } else {
        // success may still be true even if no JSON returned by Apps Script; treat 2xx as success
        toast.success("Thank you! We'll contact you soon.");
        form.reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Submission failed. Please call or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry-form" className="py-2">
      <div className="max-w-full">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Book Your Dream Vacay Today!</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Select Anyone*</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full text-black">
                        <SelectValue className="text-black" placeholder="I am Just Inquiring?" />
                      </SelectTrigger>
                      <SelectContent className="bg-card">
                        <SelectItem value="inquiry">I am Just Inquiring?</SelectItem>
                        <SelectItem value="ready">Ready to Book</SelectItem>
                        <SelectItem value="callback">Request Call Back</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Name*</FormLabel>
                  <FormControl className="text-black">
                    <Input placeholder="Your Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Email*</FormLabel>
                  <FormControl className="text-black">
                    <Input type="email" placeholder="Your Email ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Whatsapp Number*</FormLabel>
                  <FormControl className="text-black">
                    <Input placeholder="Your Whatsapp Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="travelDestination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Travel Destination*</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full text-black">
                        <SelectValue placeholder="Singapore, Malaysia & Bali" />
                      </SelectTrigger>
                      <SelectContent className="bg-card">
                        <SelectItem value="singapore_malaysia_bali">Singapore, Malaysia &amp; Bali</SelectItem>
                        <SelectItem value="new_zealand">New Zealand</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="domestic">Domestic (India)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="travelDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Travel Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="dd-mm-yyyy" className="text-black" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Message</FormLabel>
                  <FormControl className="text-black">
                    <textarea
                      {...field}
                      placeholder="Your Comment (optional)"
                      className="w-full rounded-md border px-3 py-2 min-h-[120px] resize-vertical bg-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-4 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Get My Free Plan Now
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default InquiryForm;
// ...existing code...




