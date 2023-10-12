import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { form } from "../config";

const Home = lazy(() => import("../components/home/home"));
const Error = lazy(() => import("../components/pages/error/error"));
const Details = lazy(() => import("../components/pages/details/details"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="details/:id" element={<Details></Details>}></Route>
        <Route path={form} element={<Details></Details>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
}
