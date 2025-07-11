'use client';
import { 
  Card, 
  CardBody,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import { CalendarIcon } from "@heroicons/react/24/outline";

const CalendarPage = () => {
  return (
    <div className="min-h-screen w-full h-full flex items-center justify-center overflow-auto bg-cover bg-center bg-gray-50 p-4">
      {/* @ts-expect-error Material Tailwind props */}
      <Card className="w-96 shadow-lg">
        {/* @ts-expect-error Material Tailwind props */}
        <CardHeader 
          floated={false} 
          className="h-56 bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center"
        >
          <CalendarIcon className="h-24 w-24 text-white" />
        </CardHeader>
        {/* @ts-expect-error Material Tailwind props */}
        <CardBody className="text-center">
          {/* @ts-expect-error Material Tailwind props */}
          <Typography 
            variant="h4" 
            color="blue-gray" 
            className="mb-3 font-bold"
          >
            Flight Calendar
          </Typography>
          {/* @ts-expect-error Material Tailwind props */}
          <Typography className="mb-6 text-gray-600">
            View and manage your flight schedules. Keep track of your upcoming 
            trips and never miss a flight again.
          </Typography>
          <div className="flex flex-col gap-3">
            {/* @ts-expect-error Material Tailwind props */}
            <Button 
              size="lg" 
              fullWidth
              className="bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg transition-all"
            >
              View Calendar
            </Button>
            {/* @ts-expect-error Material Tailwind props */}
            <Button 
              variant="outlined"
              size="lg" 
              fullWidth
              className="border-green-500 text-green-500 hover:bg-green-50 transition-all"
            >
              Add Event
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CalendarPage;
