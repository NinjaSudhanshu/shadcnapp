"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function ProfileForm() {
    const [username, setUsername] = useState("shadcn");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("I own a computer.");
    const [urls, setUrls] = useState([
        "https://shadcn.com",
        "http://twitter.com/shadcn",
    ]);

    const addUrl = () => {
        setUrls([...urls, ""]);
    };

    const updateUrl = (index, value) => {
        const updatedUrls = [...urls];
        updatedUrls[index] = value;
        setUrls(updatedUrls);
    };

    const removeUrl = (index) => {
        const updatedUrls = urls.filter((_, i) => i !== index);
        setUrls(updatedUrls);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, bio, urls });
        alert("Profile updated!");
    };

    return (
        <div className=" mx-auto p-8  rounded-md ">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Profile
            </h1>

            <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                    >
                        Username
                    </label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className=" p-2 border rounded  dark:text-white w-[400px]"
                    />
                    <p
                        className="block text-sm mt-2 font-medium text-gray-600 dark:text-gray-400 mb-2"

                    >
                        This is your public display name. It can be your real
                        name or a pseudonym. You can only change this once every
                        30 days.
                    </p>
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                    >
                        Email
                    </label>
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto w-lg">
                                {email ? email : 'Select a verified email to display'}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="bg-gray-900  rounded shadow-md w-lg ">
                            <DropdownMenuItem
                                onClick={() => setEmail("email1@example.com")}
                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer focus:outline-none"
                            >
                                email1@example.com
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setEmail("email2@example.com")}
                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer focus:outline-none"
                            >
                                email2@example.com
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        You can manage verified email addresses in your email
                        settings.
                    </p>
                </div>

                {/* Bio */}
                <div className="mb-6">
                    <label
                        htmlFor="bio"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                    >
                        Bio
                    </label>
                    <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                        className="w-[400px]"

                    ></Textarea>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        You can @mention other users and organizations to link
                        to them.
                    </p>
                </div>

                {/* URLs */}
                <div className="mb-6">
                    <label
                        htmlFor="urls"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                    >
                        URLs
                    </label>
                    {urls.map((url, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                type="url"
                                value={url}
                                onChange={(e) =>
                                    updateUrl(index, e.target.value)
                                }
                                className=" p-2 border rounded  dark:text-white w-[400px]"
                            />
                            <Button
                                variant="outline"

                                type="button"
                                onClick={() => removeUrl(index)}
                                className="ml-4"

                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        type="button"
                        onClick={addUrl}
                        className="mt-2"
                    >
                        Add URL
                    </Button>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"

                >
                    Update profile
                </Button>
            </form>
        </div>
    );
}
