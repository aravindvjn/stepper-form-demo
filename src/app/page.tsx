import React from "react";
import DemoPage from "@/components/demo/Demo";
import Link from "next/link";

const features = [
  "Reusable stepper form",
  "Separate exportable field components",
  "React Hook Form + Zod friendly",
  "Tailwind + twMerge + CVA variants",
  "Dynamic config-based fields",
  "Searchable select and multi-select",
  "Country / state / city fields",
];

const stepsExample = `import { StepperForm } from "@aravindvjn/stepper-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
});

type FormInput = z.input<typeof schema>;
type FormValues = z.output<typeof schema>;

const steps = [
  {
    step: 1,
    title: "Basic Details",
    fields: [
      {
        name: "full_name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
      },
    ],
  },
  {
    step: 2,
    title: "Skills",
    fields: [
      {
        name: "skills",
        label: "Skills",
        type: "multi-select",
        required: true,
        options: [
          { label: "React", value: "react" },
          { label: "Next.js", value: "nextjs" },
          { label: "TypeScript", value: "typescript" },
        ],
        selectProps: {
          searchable: true,
        },
      },
    ],
  },
];

export default function Example() {
  const form = useForm<FormInput, any, FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      skills: [],
    },
  });

  return (
    <StepperForm
      form={form}
      steps={steps}
      title="Example Form"
      description="Simple reusable stepper form"
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
}`;

const installCode = `npm install @aravindvjn/stepper-form react-hook-form zod @hookform/resolvers`;

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              React Stepper Form Package
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Build dynamic multi-step forms faster
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 md:text-base">
              A reusable stepper form package with separate field components,
              clean variants, React Hook Form support, and config-driven field
              rendering.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#demo"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                View Demo
              </Link>
              <Link
                href="#usage"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                How to Use
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-medium text-zinc-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="install" className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Installation</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Install the package and required form dependencies.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-zinc-950 p-4 text-sm text-zinc-100">
            <code>{installCode}</code>
          </pre>
        </div>
      </section>

      <section id="usage" className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Quick Usage</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Define your schema, create a steps config, and pass it into the
            stepper form.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-zinc-950 p-4 text-sm text-zinc-100">
            <code>{stepsExample}</code>
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">How it works</h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Define fields as objects with type, name, label, placeholder,
                options, and any extra props like <code>inputProps</code>,{" "}
                <code>selectProps</code>, or <code>phoneProps</code>.
              </p>
              <p>
                Each field is a separate reusable component, so you can export
                and use them independently or through the central renderer.
              </p>
              <p>
                Styling is controlled through CVA variants and merged with
                <code> tailwind-merge </code>
                so overrides stay clean.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Package highlights</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <p>• Config-driven fields</p>
              <p>• Supports custom rendering for uncommon fields</p>
              <p>
                • Works well for admin panels, onboarding forms, and internal
                tools
              </p>
              <p>• Easy to extend with your own custom field types</p>
              <p>• Separate demo page ready for hosting</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Live Demo</h2>
          <p className="mt-2 text-sm text-zinc-600">
            This is the interactive example showing the supported field types
            and step flow.
          </p>
        </div>

        <DemoPage />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Notes</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <p>
              This demo is meant for package showcase and documentation. You can
              deploy this page as your public demo site.
            </p>
            <p>
              Later you can add tabs for API docs, field props, variants, and
              CLI usage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
