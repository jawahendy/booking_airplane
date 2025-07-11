'use client';
import { 
  Card, 
  CardBody,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/outline";

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full h-full flex items-center justify-center overflow-auto bg-cover bg-center bg-gray-50 p-4">
      {/* @ts-expect-error Material Tailwind props */}
      <Card className="w-96 shadow-lg">
        {/* @ts-expect-error Material Tailwind props */}
        <CardHeader 
          floated={false} 
          className="h-56 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center"
        >
          <UserIcon className="h-24 w-24 text-white" />
        </CardHeader>
        {/* @ts-expect-error Material Tailwind props */}
        <CardBody className="text-center">
          {/* @ts-expect-error Material Tailwind props */}
          <Typography 
            variant="h4" 
            color="blue-gray" 
            className="mb-3 font-bold"
          >
            User Profile
          </Typography>
          {/* @ts-expect-error Material Tailwind props */}
          <Typography className="mb-6 text-gray-600">
            Manage your personal information, preferences, and account settings. 
            Keep your profile updated for the best experience.
          </Typography>
          <div className="flex flex-col gap-3">
            {/* @ts-expect-error Material Tailwind props */}
            <Button 
              size="lg" 
              fullWidth
              className="bg-purple-500 hover:bg-purple-600 shadow-md hover:shadow-lg transition-all"
            >
              Edit Profile
            </Button>
            {/* @ts-expect-error Material Tailwind props */}
            <Button 
              variant="outlined"
              size="lg" 
              fullWidth
              className="border-purple-500 text-purple-500 hover:bg-purple-50 transition-all"
            >
              Account Settings
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfilePage;
