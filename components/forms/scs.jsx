"user client"
import { useState } from "react";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function ScsForm() {
    const [currentTab, setCurrentTab] = useState("step1");

    const handleNext = () => {
        if (currentTab === "step1") setCurrentTab("step2");
        else if (currentTab === "step2") setCurrentTab("step3");
    };

    const handlePrevious = () => {
        if (currentTab === "step3") setCurrentTab("step2");
        else if (currentTab === "step2") setCurrentTab("step1");
    };

    return (
        <div className="w-full  mt-4 max-w-4xl mx-auto">
            <h1 className={` text-2xl text-center font-bold ${inter.className}`}>Swadeshi Component Standardization</h1>
            <Tabs className="w-full mt-4 max-w-4xl mx-auto" value={currentTab} onValueChange={setCurrentTab}>
                <TabsList className="grid grid-cols-3 gap-2">
                    <TabsTrigger value="step1">Step 1</TabsTrigger>
                    <TabsTrigger value="step2">Step 2</TabsTrigger>
                    <TabsTrigger value="step3">Step 3</TabsTrigger>
                </TabsList>
                <TabsContent value="step1" className=''>
                    <Card className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="temporary-number">Temporary Number Till Payment</Label>
                                    <Input id="temporary-number" placeholder="Enter temporary number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="applicant-type">Applicant Type</Label>
                                    <Select id="applicant-type">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select applicant type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="individual">Individual</SelectItem>
                                            <SelectItem value="company">Company</SelectItem>
                                            <SelectItem value="partnership">Partnership</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select id="category">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="category1">Category 1</SelectItem>
                                            <SelectItem value="category2">Category 2</SelectItem>
                                            <SelectItem value="category3">Category 3</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company-name">Name of Company</Label>
                                    <Input id="company-name" placeholder="Enter company name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Textarea id="address" placeholder="Enter your address" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input id="country" placeholder="Enter your country" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input id="state" placeholder="Enter your state" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="district">District</Label>
                                    <Input id="district" placeholder="Enter your district" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Enter your email" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" type="tel" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="legal-status">Legal Status</Label>
                                    <Input id="legal-status" placeholder="Enter your legal status" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="agent-name">Name</Label>
                                    <Input id="agent-name" placeholder="Enter agent's name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="agent-address">Address</Label>
                                    <Textarea id="agent-address" placeholder="Enter agent's address" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="trading-as">Trading As</Label>
                                    <Input id="trading-as" placeholder="Enter trading name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="service-address">Address for Service (In India)</Label>
                                    <Textarea id="service-address" placeholder="Enter service address" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="branch-name">Branch Name (Jurisdiction)</Label>
                                    <Input id="branch-name" placeholder="Enter branch name" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="step2">
                    <Card className="p-6 space-y-6">
                        <div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>S.N.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Brand Name</TableHead>
                                        <TableHead>Upload Image</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>
                                            <Input placeholder="Enter product name" />
                                        </TableCell>
                                        <TableCell>
                                            <Input placeholder="Enter brand name" />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="icon" variant="outline">
                                                <UploadIcon className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Button className="mt-4" variant="outline">
                                Add Product
                            </Button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="verify" />
                                <Label htmlFor="verify">I verify</Label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="signing-authority">Signing Authority</Label>
                                    <Input id="signing-authority" placeholder="Enter signing authority" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="step3">
                    <Card className="p-6 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">Form Preview</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Temporary Number Till Payment:</p>
                                    <p>123456789</p>
                                </div>
                                <div>
                                    <p className="font-medium">Applicant Type:</p>
                                    <p>Company</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Name:</p>
                                    <p>John Doe</p>
                                </div>
                                <div>
                                    <p className="font-medium">Category:</p>
                                    <p>Category 1</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Name of Company:</p>
                                    <p>Acme Inc.</p>
                                </div>
                                <div>
                                    <p className="font-medium">Address:</p>
                                    <p>123 Main St, Anytown USA</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Country:</p>
                                    <p>United States</p>
                                </div>
                                <div>
                                    <p className="font-medium">State:</p>
                                    <p>California</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">District:</p>
                                    <p>Los Angeles</p>
                                </div>
                                <div>
                                    <p className="font-medium">Email:</p>
                                    <p>john@example.com</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Phone Number:</p>
                                    <p>555-1234567</p>
                                </div>
                                <div>
                                    <p className="font-medium">Legal Status:</p>
                                    <p>Private Limited</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Agent Name:</p>
                                    <p>Jane Smith</p>
                                </div>
                                <div>
                                    <p className="font-medium">Agent Address:</p>
                                    <p>456 Oak St, Anytown USA</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-medium">Trading As:</p>
                                    <p>Acme Trading</p>
                                </div>
                                <div>
                                    <p className="font-medium">Service Address:</p>
                                    <p>789 Elm St, Anytown USA</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-medium">Branch Name (Jurisdiction):</p>
                                <p>Anytown Branch</p>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <Button variant="outline">Pay</Button>
                        </div>
                    </Card>
                </TabsContent>
                <div className="flex justify-between mt-6">
                    <div className="flex space-x-4">
                        <Button variant="outline" onClick={handlePrevious} disabled={currentTab === "step1"}>Previous</Button>
                        <Button variant="outline" onClick={handleNext} disabled={currentTab === "step3"}>Next</Button>
                    </div>
                    <Button variant="outline">Save as Draft</Button>
                </div>
            </Tabs>
        </div>
    );
}

function UploadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}
