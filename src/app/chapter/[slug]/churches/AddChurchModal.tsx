"use client";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddChurchForm from "./AddChurchForm";

export default function AddChurchModal() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="bg-white">
        {isMobile ? (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button className="bg-[#6F4E37] h-10 px-4 text-white hover:bg-[#A67B5B] flex flex-row items-center">
                <Plus size={24} color="white" /> Add Church
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-none px-4">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold text-[#6F4E37]">
                  Add Church
                </DrawerTitle>
              </DrawerHeader>

              <AddChurchForm onSuccess={() => setOpen(false)} />
              <DrawerFooter className=" p-0 mt-0 py-2">
                <DrawerClose asChild>
                  <Button
                    className="border-1 border-[#A67B5B]/25 bg-[#A67B5B]/10 w-full text-black hover:bg-red-50"
                    variant="default"
                    type="button"
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#6F4E37] h-10 px-4 text-white hover:bg-[#A67B5B] flex flex-row items-center">
                <Plus size={24} color="white" /> Add Church
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="items-center">
                <DialogTitle className="text-2xl items-center justify-center font-bold text-[#6F4E37]">
                  Add Church
                </DialogTitle>
              </DialogHeader>
              <AddChurchForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </>
  );
}
