import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react'; // these are components that come with React
import logo from './logo.svg'; // files are imported like this
import './App.css';
import { SomeCustomComponent } from './components/SomeCustomComponent/SomeCustomComponent'; // this is our custom component

// formatting stuff (i'm not exactly sure how it works)
const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };

// we can make variables like normal in javascript, but because this is typescript, we need to specify what kind of data they hold.
let headerText: string = "Real Intern Hours";

// this is the function that returns our page!! yes, the entire page.
// it may look familiar to you because it's pretty much HTML with extra tags.
export const App: React.FunctionComponent = () => {
  // JSX is the idea of writing functions that 'return' HTML code. Every functional component in React does this exact thing.
  // from what I understand, the stuff you return must be contained in a single tag; in this case, an empty div works just fine.
  return (

    <div style={{height: '100%', margin: '0'}}>
      {/* 'Stack' is a pre-built component included in Fluent UI React. it is used here in the default page. */}
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            // look!! normal CSS!!!
            // just note that we use the 'styles' tag for components (like Stack) whereas we use normal 'style' for basic HTML elements (like img)
            // if you're looking for the stylesheet, it's in App.css :)
            width: '30%',
            margin: '0',
            textAlign: 'center',
            color: '#605e5c',
            float: 'left',
            borderRight: '3px solid black',
            height: '100%'
          },
        }}
        tokens={stackTokens}
      >
        {/* you might recognize this tag! */}
        <img className="App-logo" src={logo} alt="logo" />
        <Text variant="xxLarge" styles={boldStyle}>
          Welcome to Your Fluent UI App
        </Text>
        <Text variant="large">For a guide on how to customize this project, check out the Fluent UI documentation.</Text>
        <Text variant="large" styles={boldStyle}>
          Essential Links
        </Text>
        <Stack horizontal tokens={stackTokens} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
          <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
          <Link href="https://github.com/microsoft/fluentui/">Github</Link>
          <Link href="https://twitter.com/fluentui">Twitter</Link>
        </Stack>
        <Text variant="large" styles={boldStyle}>
          Design System
        </Text>
        <Stack horizontal tokens={stackTokens} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
          <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
          <Link href="https://aka.ms/themedesigner">Theme Designer</Link>
        </Stack>
      </Stack>

      {/* in this div, you can write your own code to mess around with stuff! */}
      <div
        style={{
          float: 'right',
          height: '100%',
          margin: '0',
          //padding: '20px', this breaks the page and I have no idea why
          backgroundColor: '#EEEEEE',
          width: 70 + '%' // notice how we can write javascript in our style objects :D
        }}
      >
        <div style={{ padding: '20px' }}>
          {/* here's a classic header, and we're using our variable from earlier as the text. JS will stick it right into the page! */}
          <h1>{headerText}</h1>
          <SomeCustomComponent /> {/* Here is a custom component that we made! See SomeCustomComponent.tsx */}
        </div>

      </div>
    </div>
  );
};
