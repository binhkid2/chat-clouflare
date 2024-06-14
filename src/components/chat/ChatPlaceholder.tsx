import React from "react";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">Chat Llama2 free</h1>
        <p className="mt-4 text-lg">
          A Chat app powered by open source LLama2.FREE to use.Build with Next.js and Cloudflare.
        </p>
        <p className="p-6">Based on open source <a href="https://github.com/Nashex/gpt4-playground">GPT-4 Playground by Nashex</a></p>
        <p className=" font-semibold"> More free Ai models in <a href="https://dashboard.theheai.com">Theheai.com</a></p>
      </div>
    </div>
  );
}
