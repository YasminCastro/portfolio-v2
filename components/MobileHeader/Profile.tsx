import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeftSidebar from "../LeftSideBar/SideBar";
import { ScrollArea } from "../ui/scroll-area";

export function Profile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar className="h-8 w-8 ">
          <button>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/62770317"
              alt="Yasmin Castro"
            />
            <AvatarFallback>YC</AvatarFallback>
          </button>
        </Avatar>
      </DialogTrigger>

      <DialogContent className="h-5/6">
        <ScrollArea>
          <LeftSidebar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
