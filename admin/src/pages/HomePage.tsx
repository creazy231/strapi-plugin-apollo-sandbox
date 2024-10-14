import "../styles/app.css";

import {
  Layouts,
} from '@strapi/strapi/admin';

import {
  Box,
  Main,
  TextButton,
  Typography, } from '@strapi/design-system';
import { ApolloSandbox } from "@apollo/sandbox/react";
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

import {useEffect, useState} from "react";

const HomePage = () => {
  const [ error, setError ] = useState("");
  const [ tunnel, setTunnel ] = useState("");

  useEffect(() => {
    fetch("/apollo-sandbox/create-tunnel", {
      method: "GET",
    }).then((res: CreateTunnelResponse) => {
      console.log(`GraphQL Tunnel created on: ${res.url}`);
      setTunnel(res.url);
    }).catch((e) => {
      console.log(e);
      setError("There was an error creating or reading the Tunnel. Please try again and make sure your plugin configuration is correct.");
    });

    return () => {
      fetch("/apollo-sandbox/close-tunnel", {
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
              <Layouts.Root>
                <Main>
                  <Layouts.Header
                    title="Apollo Sandbox"
                    subtitle="A Powerful Plugin for Apollo GraphQL Development"
                  />
                  <Layouts.Content>
                    <Box padding={4} hasRadius background="neutral0" shadow="tableShadow">
                      {
                        error
                          ? (
                            <Typography textColor="danger500">
                              {error}
                            </Typography>
                          )
                          : (
                            <TextButton loading startIcon={<ArrowLeft />}>
                              Loading Tunnel...
                            </TextButton>
                          )
                      }
                    </Box>
                  </Layouts.Content>
                </Main>
              </Layouts.Root>
            )
        }
      </div>
    </>
  );
};

export { HomePage };
