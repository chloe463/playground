"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { PageHeader } from "../../components/PageHeader";
import { PrimaryButton } from "../../lib";

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <PageHeader title={"CRUD examples"}>
      <div className="absolute top-0 right-6">
        <PrimaryButton type="button" onClick={() => router.push("/questionnaires/new")}>
          Create New
        </PrimaryButton>
      </div>
    </PageHeader>
  );
};
