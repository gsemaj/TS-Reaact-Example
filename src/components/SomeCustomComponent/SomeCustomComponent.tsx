import React, { useState } from 'react';
import { Stack, PrimaryButton, DefaultButton, IStackTokens } from '@fluentui/react'; // these are components that come with React
import './SomeCustomComponent.css' // this is our component-specific stylesheet. we can also import App.css if we wanted to use that

// again, I'm not really sure wwhen you're supposed to use these
const stackTokens: IStackTokens = { childrenGap: 15 };

export const SomeCustomComponent: React.FunctionComponent = () => {

    /* Instead of using variables in components, React has a thing called "state."
     * States are used to keep data isolated between components, so that if we had
     * two copies of SomeCustomComponent, our data wouldn't cross between them.
     * React keeps track of all this data in a global state, or context.
     * We can "hook" into this context to get the data for our component. */

    /* Let's say our component has two buttons and we want to be able to change the labels.
     * In this case, we call "useState" for each of the two button labels: */
    const [button1Text, setButton1Text] = useState('Button 1 :)');
    const [button2Text, setButton2Text] = useState("Button 2 :)");
    /* The structure of the useState hook goes like this:
     * const [getter, setter] = useState(default value)
     * You use the setter to update your property and the getter to get the value of it.
     * Why does React do it like this? The cool thing is that whenever you use the setter, the component reloads with the new data! */ 

    return (
        <div>
            <h3 className="subHeader">SomeCustomComponent</h3> {/* note the CSS class is specified by "className" instead of "class" + see SomeCustomComponent.css */}
            <Stack horizontal tokens={stackTokens}>
                {/* as you can see here, we are using the getters for our properties as the button labels! */}
                <DefaultButton text={button1Text} onClick={button1Clicked} />
                <PrimaryButton text={button2Text} onClick={button2Clicked} />
                {/* The onClick attribute lets us specify a function that runs when an element is clicked. */}
            </Stack>
        </div>
    );

    // these are our own custom functions
    function button1Clicked(): void {
        // can you tell what this does?
        if(button1Text === "Button 1 :)") { // notice we use the getter here...
            setButton1Text("Button 1 :("); // ...and the setter here
        } else {
            setButton1Text("Button 1 :)");
        }
    }

    // this one does the same thing, but for button 2
    function button2Clicked(): void {
        if(button2Text === "Button 2 :)") {
            setButton2Text("Button 2 :(");
        } else {
            setButton2Text("Button 2 :)");
        }
    }
};
