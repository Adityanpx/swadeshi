
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Layout from "@/components/globals/Layout"
import { useContext, useState } from "react"
import { DataContext } from "@/store/GlobalState"
import { useRouter } from "next/navigation"

export default function Register() {
    const initialState = { email: '', password: '', name: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password, name } = userData
    // const { state, dispatch } = useContext(DataContext)
    const [showModal, setShowModal] = useState(false)
    const router = useRouter();

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = async e => {
        e.preventDefault()

        const res = await postData('auth/register', userData)
        if (res.msg === 'Successful Registration!') {
            toast("Registration Successful")
            router.push('/login')
            // console.log('JSON files generated successfully.');
        } else if (res.err === 'Email already exists!') {
            toast.error('Email already exists');
        } else if (res.err) {
            toast.error('An error occurred. Please try again later.');
        }
        console.log(res)
    }
    return (
        <>
            <Layout>
                <div className=" bg-[#FBFBFB]  h-screen overflow-hidden">
                    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
                        <div className="mx-4 w-full max-w-md space-y-6">
                            <div className="flex justify-center">
                                <Link href="/" prefetch={false}>
                                    <img src="/logo.png" className="h-12 dark:hidden" />
                                    <img src="/logo-dark.png" className="h-12 dark:block hidden" />
                                </Link>
                            </div>
                            <Card>
                                <form onSubmit={handleSubmit}>
                                    <CardHeader className="space-y-1 text-center">
                                        <CardTitle className="text-2xl">Create an account</CardTitle>
                                        <CardDescription>Enter your details below to get started.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="m@example.com" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password">Password</Label>
                                            <Input id="password" type="password" required />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button type="submit" className="w-full">
                                            Create account
                                        </Button>
                                    </CardFooter>
                                </form>
                                <CardFooter className="text-center text-sm">
                                    Already have an account? {" "}
                                    <Link href="/dashboard" className="font-medium ml-1 text-gray-900 hover:underline dark:text-gray-50" prefetch={false}>
                                        Login
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </Layout >
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