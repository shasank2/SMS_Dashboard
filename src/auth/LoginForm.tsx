import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Input } from '../components/ui/input';
import { Loader } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';

type Props = {}

const LoginForm = (props: Props) => {

    const form = useForm({
        // resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <div className='flex flex-1 justify-center items-center flex-col py-10'>
            <Form {...form}>
                <div className="sm:w-[420px] flex-center flex-col mt-20 p-7 border bg-dark-3 rounded-md">
                    <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                        Log in to your account
                    </h2>
                    <p className="text-light-3 small-medium md:base-regular mt-2">
                        Welcome back! Please enter your details.
                    </p>
                    <form
                        // onSubmit={form.handleSubmit(handleSignin)}
                        className="flex flex-col gap-5 w-full mt-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">Email</FormLabel>
                                    <FormControl>
                                        <Input type="text" className="shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="shad-button_primary">
                            {/* {isLoading || isUserLoading ? (
                            <div className="flex-center gap-2">
                            <Loader /> Loading...
                            </div>
                            ) : (
                                "Log in"
                        )} */}
                            Login
                        </Button>

                        <p className="text-small-regular text-light-2 text-center mt-2">
                            Don&apos;t have an account?
                            <Link
                                to="/sign-up"
                                className="text-primary-500 text-small-semibold ml-1">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm