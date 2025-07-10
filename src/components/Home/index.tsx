'use client';
import { 
  Button, 
  Card, 
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full h-full flex items-center justify-center overflow-auto bg-cover bg-center bg-gray-50 p-4">
            {/* @ts-expect-error Material Tailwind props */}
            <Card 
                className="w-96 shadow-lg"
            >
                {/* @ts-expect-error Material Tailwind props */}
                <CardHeader 
                    floated={false} 
                    className="h-56 bg-gradient-to-r from-blue-500 to-purple-600"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="airplane flying"
                        className="h-full w-full object-cover"
                        width={800}
                        height={400}
                    />
                </CardHeader>
                {/* @ts-expect-error Material Tailwind props */}
                <CardBody 
                    className="text-center"
                >
                    {/* @ts-expect-error Material Tailwind props */}
                    <Typography 
                        variant="h4" 
                        color="blue-gray" 
                        className="mb-3 font-bold"
                    >
                        Book Your Flight
                    </Typography>
                    {/* @ts-expect-error Material Tailwind props */}
                    <Typography 
                        className="mb-6 text-gray-600"
                    >
                        Discover amazing destinations and book your next adventure with us. 
                        Fast, secure, and reliable airplane booking service.
                    </Typography>
                    <div className="flex flex-col gap-3">
                        {/* @ts-expect-error Material Tailwind props */}
                        <Button 
                            size="lg" 
                            fullWidth
                            className="bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all"
                        >
                            Search Flights
                        </Button>
                        {/* @ts-expect-error Material Tailwind props */}
                        <Button 
                            variant="outlined"
                            size="lg" 
                            fullWidth
                            className="border-blue-500 text-blue-500 hover:bg-blue-50 transition-all"
                        >
                            View Deals
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default HomePage;