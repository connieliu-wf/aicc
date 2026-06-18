"use client";

import { Button } from "@/components/spring-ui/button";
import { Table, TableHeader, TableRow, TableCell, ColumnDef } from "@/components/spring-ui/table";
import { Avatar } from "@/components/spring-ui/avatar";
import { Tag } from "@/components/spring-ui/tag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/spring-ui/select";
import { InfoIcon, MoreIcon } from "@/icons";
import { IconButton } from "@/components/spring-ui/iconButton";
import { useState } from "react";

// Team member data structure
interface TeamMember {
  id: string;
  name: string;
  email: string;
  fallback: string;
  role: string;
  avatar?: string;
  isOwner?: boolean;
  isPendingInvite?: boolean;
}

// Guest data structure
interface Guest {
  id: string;
  name: string;
  email: string;
  fallback: string;
  role: string;
  lastActive: string;
}

// Available roles (Owner removed - only Kathryn Murphy is owner)
const availableRoles = ["Admin", "Member"];

// Mock team member data
const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Kathryn Murphy",
    email: "kathryn.murphy@example.com",
    fallback: "KM",
    role: "Owner",
    isOwner: true,
  },
  {
    id: "2",
    name: "Dianne Russell",
    email: "dianne.russell@example.com",
    fallback: "DR",
    role: "Member",
  },
  {
    id: "3",
    name: "Savannah Nguyen",
    email: "savannah.nguyen@example.com",
    fallback: "SN",
    role: "Admin",
  },
  {
    id: "4",
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    fallback: "JC",
    role: "Admin",
  },
  {
    id: "5",
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    fallback: "CF",
    role: "Admin",
  },
  {
    id: "6",
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    fallback: "EP",
    role: "Admin",
  },
  {
    id: "7",
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    fallback: "JJ",
    role: "Admin",
  },
  {
    id: "8",
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    fallback: "JW",
    role: "Admin",
  },
  {
    id: "9",
    name: "Robert Fox",
    email: "robert.fox@example.com",
    fallback: "RF",
    role: "Member",
  },
  {
    id: "10",
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    fallback: "FM",
    role: "Admin",
  },
  {
    id: "11",
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    fallback: "TW",
    role: "Member",
    isPendingInvite: true,
  },
];

// Available seats count
const availableSeats = 5;

// Available guest seats count
const availableGuestSeats = 1;

// Mock guest data
const mockGuests: Guest[] = [
  {
    id: "g1",
    name: "Guy Hawkins",
    email: "guy.hawkins@gymflow.com",
    fallback: "GH",
    role: "designer",
    lastActive: "Just now",
  },
  {
    id: "g2",
    name: "Esther Howard",
    email: "esther.howard@gymflow.com",
    fallback: "EH",
    role: "designer",
    lastActive: "Just now",
  },
  {
    id: "g3",
    name: "Annette Black",
    email: "annette.black@gymflow.com",
    fallback: "AB",
    role: "designer",
    lastActive: "Just now",
  },
];

export function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(mockTeamMembers);
  const [guests, setGuests] = useState<Guest[]>(mockGuests);

  const handleRoleChange = (memberId: string, newRole: string) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId
          ? { ...member, role: newRole }
          : member
      )
    );
  };

  const handleGuestRoleChange = (guestId: string, newRole: string) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === guestId
          ? { ...guest, role: newRole }
          : guest
      )
    );
  };

  // Define guest table columns
  const guestColumns: ColumnDef[] = [
    {
      id: "name",
      header: "Name",
      renderCell: (value: any, rowData: Guest) => (
        <div className="flex items-center gap-2">
          <Avatar
            fallback={rowData.fallback}
            size="md"
          />
          <div className="flex flex-col min-w-0 gap-0.5">
            <span className="body-text text-[var(--text-primary)] truncate">
              {rowData.name}
            </span>
            <span className="body-text text-[var(--text-secondary)] truncate">
              {rowData.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "role",
      header: "Role",
      width: "300px",
      renderCell: (value: any, rowData: Guest) => (
        <Select
          value={rowData.role}
          onValueChange={(value) => handleGuestRoleChange(rowData.id, value)}
        >
          <SelectTrigger variant="default" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Default</SelectLabel>
              <SelectItem value="site-manager" description="Can manage site settings and billing">
                Site manager
              </SelectItem>
              <SelectItem value="designer" description="Design using all features">
                Designer
              </SelectItem>
              <SelectItem value="marketer" description="Build pages with components">
                Marketer
              </SelectItem>
              <SelectItem value="content-editor" description="Only edit content">
                Content editor
              </SelectItem>
              <SelectItem value="reviewer" description="View and comment on sites">
                Reviewer
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
    {
      id: "lastActive",
      header: "Last active",
      renderCell: (value: any, rowData: Guest) => (
        <span className="body-text text-[var(--text-secondary)]">
          {rowData.lastActive}
        </span>
      ),
    },
    {
      id: "actions",
      header: "",
      width: "64px",
      renderCell: () => (
        <div className="flex items-center justify-end w-full">
          <IconButton variant="ghost" size="comfortable">
            <MoreIcon size={16} className="text-[var(--text-secondary)]" />
          </IconButton>
        </div>
      ),
    },
  ];

  // Define table columns
  const columns: ColumnDef[] = [
    {
      id: "name",
      header: "Name",
      renderCell: (value: any, rowData: TeamMember) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={rowData.avatar}
            fallback={rowData.fallback}
            size="md"
          />
          <div className="flex flex-col min-w-0 gap-0.5">
            {rowData.isPendingInvite ? (
              <div className="flex items-center gap-2">
                <span className="body-text text-[var(--text-primary)] truncate">
                  {rowData.email}
                </span>
                <Tag variant="default" size="compact" styleType="tinted">
                  Pending invite
                </Tag>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <span className="body-text text-[var(--text-primary)] truncate">
                    {rowData.name}
                  </span>
                  {rowData.isOwner && (
                    <Tag variant="default" size="compact" styleType="tinted">
                      Owner
                    </Tag>
                  )}
                </div>
                <span className="body-text text-[var(--text-secondary)] truncate">
                  {rowData.email}
                </span>
              </>
            )}
          </div>
        </div>
      ),
    },
    {
      id: "role",
      header: "Workspace role",
      renderCell: (value: any, rowData: TeamMember) => {
        // For owners, we need to include "Owner" in the options so it displays
        const rolesToShow = rowData.isOwner 
          ? ["Owner", ...availableRoles] 
          : availableRoles;
        
        return (
          <Select
            value={rowData.role}
            onValueChange={(value) => handleRoleChange(rowData.id, value)}
            disabled={rowData.isOwner}
          >
            <SelectTrigger variant="default" className="w-full max-w-[200px]" disabled={rowData.isOwner}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {rolesToShow.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      },
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-start justify-between px-6 py-8">
        <div className="flex flex-col gap-2 max-w-[640px]">
          <h1 className="title-text-bold text-[var(--text-primary)]">
            Team Management
          </h1>
          <p className="body-text text-[var(--text-secondary)]">
            Invite team members, manage permissions, and collaborate on your projects.
          </p>
        </div>
        
        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="body-text text-[var(--text-secondary)] whitespace-nowrap">
              {availableSeats} available
            </span>
            <InfoIcon 
              size={16} 
              className="text-[var(--text-secondary)]"
            />
          </div>
          <Button variant="primary" size="comfortable">
            Invite member
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="px-6 pb-6">
        <Table>
          <TableHeader columns={columns} />
          {members.map((member) => (
            <TableRow
              key={member.id}
              data={member}
              columns={columns}
            />
          ))}
        </Table>
      </div>

      {/* Guests Section */}
      <div className="px-6 pb-6 mt-5 flex flex-col gap-4">
        {/* Title Bar */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <div className="flex flex-col gap-1">
              <h2 className="body-text-bold text-[var(--text-primary)]">
                Agency or Freelancer Guests
              </h2>
              <p className="body-text text-[var(--text-secondary)]">
                Invite guests to collaborate on your Workspace sites for free. To accept an invite, guests need to be on an Agency or Freelancer Workspace plan.{" "}
                <a 
                  href="#" 
                  className="text-[var(--text-blue)] hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more about guest permissions
                </a>
              </p>
            </div>
          </div>
          
          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <span className="body-text text-[var(--text-secondary)] whitespace-nowrap">
              {availableGuestSeats} available
            </span>
            <Button variant="primary" size="comfortable">
              Invite guest
            </Button>
          </div>
        </div>

        {/* Guests Table */}
        <Table>
          <TableHeader columns={guestColumns} />
          {guests.map((guest) => (
            <TableRow
              key={guest.id}
              data={guest}
              columns={guestColumns}
            />
          ))}
        </Table>
      </div>
    </div>
  );
}

