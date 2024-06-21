import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";

//? Tasks need to have the following: title, text content, date to be done by, checkbox for completed/not completed, dropdown menu for user to update or delete

//? Notes need to have the following: title, text content, date added, tags (work, shopping, bills etc.)

//? This component's content will be a dynamic, the inputs/text fields will change based on the type of document the user wants to create (Task/Note)

export default function CreateNewDocument() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" aria-label="Add new document" className="flex gap-x-1">
                    Add <PlusIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-fit">
                <DialogHeader>
                    <DialogTitle className="text-base">Add a new</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="task" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2 rounded-none">
                        <TabsTrigger value="task" className="rounded-none">
                            Task
                        </TabsTrigger>
                        <TabsTrigger value="note" className="rounded-none">
                            Note
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="task">
                        task <Button variant="default">Save task</Button>
                    </TabsContent>
                    <TabsContent value="note">
                        note <Button variant="default">Save note</Button>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
