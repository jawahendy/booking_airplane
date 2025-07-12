'use client';
import React from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import animations from "./animations";

const HomePage: React.FC = () => {
    return (
        <>
            <style jsx>{animations}</style>
            <MobileLayout />
            <DesktopLayout />
        </>
    );
};

export default HomePage;