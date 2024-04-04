import { useState } from 'react';
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState();
    
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const tabContent = selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : <p>Please select a button</p>;

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={<>
          <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick('state')}>State</TabButton>
        </>}>
        {tabContent}
    </Tabs>
    </Section>
  );
}