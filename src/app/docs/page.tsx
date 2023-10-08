"use client";

import Status from "@/components/Status";
import ConnectButton from "@/components/ConnectButton";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Link from "next/link";
import Card from "@/components/Card";

const Docs = () => {
  return (
    <div className="py-4 px-8">
      <h3 className="text-xl font-bold">Components</h3>
      <div className="grid md:grid-cols-3 gap-6 p-6">
        <Card
          title="Login Button"
          description="This component grants access to the users wallet and shows balance in
          the users account ."
          component={<ConnectButton />}
        />
        <Card
          title="Status Component"
          description="This component shows the status of connection to the blockchain."
          component={<Status />}
        />
        <Card
          title="Chakra UI"
          description="Check out more ready made components from Chakra UI."
          component={
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
                width={"60"}
              />
            </Box>
          }
          button={
            <Link
              href="https://chakra-ui.com/"
              className="p-4 rounded-md bg-slate-400 text-white font-bold hover:bg-slate-300 shadow-md hover:shadow-lg hover:text-slate-500 transition-all"
            >
              Click Here
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default Docs;
