import React from "react";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";
import { AllUsers, CreatePost, EditPost, Explore, PostDetails, Saved, UpdateProfile } from "./_root/pages";




const App: React.FC = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id/*" element={<PostDetails />} />
          <Route path="/update-profile/id:" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
