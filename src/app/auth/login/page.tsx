import {Card} from "@/components/ui/card";
import {fetchApi} from "@/lib/api";

export default function LoginPage(){
    const handleSubmit = async (data: {email: string, password: string}) => {
        try {
            const response = await fetchApi('/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            // Handle login success
        } catch (error) {
            // Handle error
        };

        return (
            <div className="flex item-center justify-center min-h-screen">
                <Card className="bg-white shadow">
                    {/* Login form using Shadcn components */}
                </Card>
            </div>
        )
    }
}