import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

//? Tasks need to have the following: title, text content, date to be done by, checkbox for completed/not completed, dropdown menu for user to update or delete

export default function TaskForm() {
    return (
        <TabsContent value="task">
            task <Button variant="default">Save task</Button>
        </TabsContent>
    );
}
