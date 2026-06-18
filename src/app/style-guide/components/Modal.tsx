import React, { useState } from 'react';
import { 
  Modal, 
  ModalTrigger, 
  ModalContent,
  ModalClose
} from '@/components/spring-ui/modal';
import { Button } from '@/components/spring-ui/button';
import { Input } from '@/components/spring-ui/input';
import { Textarea } from '@/components/spring-ui/textarea';
import { 
  Select,
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from '@/components/spring-ui/select';
import { InfoIcon } from '@/icons/InfoIcon';
import { UploadIcon } from '@/icons/UploadIcon';
import { WarningCircleIcon } from '@/icons/WarningCircleIcon';

export function ModalExample() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Modal</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Dialog overlay that appears above the page content and requires user interaction</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg space-y-12">
        {/* Basic Modal */}
        <div>
          <h3 className="text-md font-medium mb-4">Basic Modal</h3>
          <div className="flex gap-6">
            <Modal>
              <ModalTrigger asChild>
                <Button variant="primary" size="comfortable">Open modal</Button>
              </ModalTrigger>
              <ModalContent
                title="Welcome to the Design System"
                primaryAction={{
                  label: "Get started",
                  onClick: () => console.log("Primary action clicked")
                }}
                secondaryAction={{
                  label: "Learn more",
                  onClick: () => console.log("Secondary action clicked")
                }}
              >
                <div className="flex flex-col gap-3">
                  <p className="body-text">This is a basic modal with a title, content area, and action buttons.</p>
                  <p className="body-text text-[var(--text-secondary)]">Modals are useful for focused tasks that require user attention or input.</p>
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>
        
        {/* Form Modal */}
        <div>
          <h3 className="text-md font-medium mb-4">Form Modal</h3>
          <div className="flex gap-6">
            <Modal>
              <ModalTrigger asChild>
                <Button variant="outline" size="comfortable">Create item</Button>
              </ModalTrigger>
              <ModalContent
                title="Add New Project"
                primaryAction={{
                  label: "Create",
                  onClick: () => console.log("Create clicked")
                }}
                secondaryAction={{
                  label: "Cancel",
                  onClick: () => console.log("Cancel clicked")
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="body-text-bold">Project name</label>
                    <Input
                      placeholder="Enter name"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="body-text-bold">Description</label>
                    <Textarea 
                      placeholder="Enter description"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="body-text-bold">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>
        
        {/* Confirmation Modal */}
        <div>
          <h3 className="text-md font-medium mb-4">Confirmation Modal</h3>
          <div className="flex gap-6">
            <Button 
              variant="destructive" 
              size="comfortable"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              Delete item
            </Button>
            
            <Modal open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
              <ModalContent
                title="Confirm deletion"
                primaryAction={{
                  label: "Delete",
                  variant: "destructive",
                  onClick: () => {
                    console.log("Delete confirmed");
                    setIsDeleteModalOpen(false);
                  }
                }}
                secondaryAction={{
                  label: "Cancel",
                  onClick: () => setIsDeleteModalOpen(false)
                }}
                leftAction={{
                  label: "Learn more about deletion",
                  variant: "ghost",
                  onClick: () => console.log("Learn more clicked")
                }}
              >
                <div className="flex items-start gap-3">
                  <WarningCircleIcon size={20} className="text-[var(--orange-text)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="body-text">Are you sure you want to delete this item?</p>
                    <p className="body-text text-[var(--text-secondary)] mt-1">This action cannot be undone.</p>
                  </div>
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>
        
        {/* Rich Content Modal */}
        <div>
          <h3 className="text-md font-medium mb-4">Rich Content Modal</h3>
          <div className="flex gap-6">
            <Modal>
              <ModalTrigger asChild>
                <Button variant="ghost" size="comfortable">
                  <UploadIcon size={14} className="mr-1.5" />
                  Upload Files
                </Button>
              </ModalTrigger>
              <ModalContent
                title="Upload Files"
                primaryAction={{
                  label: "Upload",
                  onClick: () => console.log("Upload clicked")
                }}
                secondaryAction={{
                  label: "Cancel",
                  onClick: () => console.log("Cancel clicked")
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="border-2 border-dashed border-[var(--border-default)] rounded-md p-8 flex flex-col items-center justify-center gap-2">
                    <UploadIcon size={24} className="text-[var(--text-secondary)]" />
                    <p className="text-sm font-medium mt-2">Drag & drop files here</p>
                    <p className="text-xs text-[var(--text-secondary)]">or</p>
                    <Button variant="outline" size="comfortable">Browse Files</Button>
                    <p className="text-xs text-[var(--text-secondary)] mt-2">Maximum file size: 10MB</p>
                  </div>
                  
                  <div className="bg-[var(--bg-tertiary)] rounded p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-[var(--blue-transparent)] flex items-center justify-center">
                        <InfoIcon size={16} className="text-[var(--text-blue)]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">document.pdf</p>
                        <p className="text-xs text-[var(--text-secondary)]">2.4MB</p>
                      </div>
                    </div>
                    <ModalClose asChild>
                      <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </ModalClose>
                  </div>
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>
        
        {/* Usage Guidelines */}
        <div>
          <h3 className="text-md font-medium mb-4">Usage Guidelines</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--text-secondary)]">• Use modals for important actions that require focused attention</p>
            <p className="text-[var(--text-secondary)]">• Include clear titles that describe the modal's purpose</p>
            <p className="text-[var(--text-secondary)]">• Provide descriptive button labels (avoid generic "OK" or "Yes")</p>
            <p className="text-[var(--text-secondary)]">• Allow users to close the modal through an X button, Cancel button, or by clicking outside</p>
            <p className="text-[var(--text-secondary)]">• Keep content focused and relevant to the task at hand</p>
          </div>
        </div>
      </div>
    </section>
  );
} 