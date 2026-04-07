import Image from "next/image";
import type { TeamMember } from "@/types";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-white p-6 shadow-card transition-shadow hover:shadow-elevated text-center",
        className
      )}
    >
      <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-sandy/50 transition-all group-hover:ring-teal-200">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>
      <h3 className="mt-5 text-xl font-bold text-ocean">{member.name}</h3>
      <p className="text-sm font-medium text-terracotta-400">{member.role}</p>
      <p className="mt-3 text-sm text-ocean/70 leading-relaxed">{member.bio}</p>
    </div>
  );
}
