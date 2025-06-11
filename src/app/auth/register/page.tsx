'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { fetchApi } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const res = await fetchApi('/auth/register', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            router.push('/dashboard');
        } catch (err) {
            alert('Đăng ký thất bại');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <h2 className="text-xl font-bold">Đăng ký tài khoản</h2>
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
                        <Button type="submit" className="w-full">Đăng ký</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
