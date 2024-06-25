
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { Sidebar } from "@/components/component/sidebar"
import Layout from "@/components/globals/Layout"

export default function Login() {
    return (
        <>
            <Layout>


                <div className=" bg-[#FBFBFB]  h-screen overflow-hidden">
                    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
                        <div className="mx-auto w-full max-w-md space-y-8">
                            <div className="flex justify-center">
                                <Link href="/" prefetch={false}>
                                    <img src="logo.png" className="h-12 dark:hidden" />
                                    <img src="logo-dark.png" className="h-12 dark:block hidden" />
                                </Link>
                            </div>
                            <Card>
                                <CardHeader className="space-y-1 text-center">
                                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                                    <CardDescription>Enter your email and password to sign in to your account</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="m@example.com" />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">Password</Label>
                                            <Link
                                                href="#"
                                                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                                                prefetch={false}
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Input id="password" type="password" />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Sign in
                                    </Button>
                                </CardContent>
                                <CardFooter className="text-center text-sm">
                                    Don&apos;t have an account? {" "}
                                    <Link href="/dashboard/register" className="font-medium ml-1 text-gray-900 hover:underline dark:text-gray-50" prefetch={false}>
                                        Register
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div >
            </Layout>
        </>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}