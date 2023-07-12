/*
 *
 * HomePage
 *
 */

import "../../styles/app.css";
import { request } from "@strapi/helper-plugin";
import React, { useEffect, useState } from "react";
import { ApolloSandbox } from "@apollo/sandbox/react";
import {
  Box,
  ContentLayout,
  HeaderLayout,
  Icon,
  Layout,
  Main,
  TextButton,
  Typography,
} from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";

interface CreateTunnelResponse {
  url: string;
}

const exampleQuery = `
query ExampleQuery {
  me {
    id
  }
}

// Remember to submit an Authorization header
// with a valid JWT token or API Token. (API Tokens can't access "me")
`;

function HomePage() {
  const [ error, setError ] = useState(null);
  const [ tunnel, setTunnel ] = useState(null);

  useEffect(() => {
    request("/apollo-sandbox/create-tunnel", {
      method: "GET",
    }).then((res: CreateTunnelResponse) => {
      console.log(`GraphQL Tunnel created on: ${res.url}`);
      setTunnel(res.url);
    }).catch((e) => {
      console.log(e);
      setError("There was an error creating or reading the Tunnel. Please try again and make sure your plugin configuration is correct.");
    });

    return () => {
      request("/apollo-sandbox/close-tunnel", {
        method: "GET",
      }).then((res) => {
        console.log("GraphQL Tunnel closed");
        console.log(res);
      });
    };
  }, []);

  return (
    <>
      <div className="apollo-sandbox-wrapper">
        {
          tunnel
            ? (
              <ApolloSandbox
                initialState={{
                  document: exampleQuery,
                }}
                endpointIsEditable={false}
                className={"apollo-sandbox"}
                initialEndpoint={tunnel}
              />
              )
            : (
              <Layout>
                <Main>
                  <HeaderLayout
                    title="Apollo Sandbox"
                    subtitle="A Powerful Plugin for Apollo GraphQL Development"
                  />
                  <ContentLayout>
                    <Box padding={4} hasRadius background="neutral0" shadow="tableShadow">
                      {
                        error
                          ? (
                            <Typography textColor="danger500">
                              {error}
                            </Typography>
                            )
                          : (
                            <TextButton loading startIcon={<Icon as={ArrowLeft}/>}>
                              Loading Tunnel...
                            </TextButton>
                            )
                      }
                    </Box>
                  </ContentLayout>
                </Main>
              </Layout>
              )
        }
      </div>
    </>
  );
}

export default HomePage;
