'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { fetchApi } from '@/lib/api';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

type LoginForm = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const { register, handleSubmit } = useForm<LoginForm>();
    const router = useRouter();

    const onSubmit = async (data: LoginForm) => {
        try {
            const response = await fetchApi('/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            router.push('/dashboard');
        } catch (error) {
            alert('Đăng nhập thất bại');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Đăng nhập</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label>Email</Label>
                            <Input type="email" {...register('email')} required />
                        </div>
                        <div>
                            <Label>Password</Label>
                            <Input type="password" {...register('password')} required />
                        </div>
                        <Button type="submit" className="w-full">
                            Đăng nhập
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
