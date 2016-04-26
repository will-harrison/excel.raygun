// Import React
import React from "react";
import moment from 'moment'
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(

);

export default class Presentation extends React.Component {
  render() {
    const todaysDate = new moment().format("YYYY.MM.DD")
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>

          <Slide
            notes="
            <ul>
              <li>Excel as a tool</li>
              <li>class for everyone</li>
              <li>what/how/why</li>
            </ul>
            "
            transition={["zoom"]}>
            <Heading size={1} caps>
              Excel
            </Heading>
            <Heading size={1} caps>
              best
            </Heading>
            <Heading size={1} caps>
              practices
            </Heading>

            <Heading size={1} fit caps textColor="secondary">
              The Excel class for everyone
            </Heading>
            <Appear>
              <Text>how to build a headache-free spreadsheet</Text>
            </Appear>
            <Text lineHeightlineHeight={50.5} fit textColor="#306390" margin="170px auto 0px" >
              Another evil experiment <span id="heart">♥</span> by Raygun Labs.
            </Text>
          </Slide>


          <Slide
            id="classFormat"
            notes="
              <ul>
                <li>like painting with wine class</li>
                <li>your question may be answered in later steps</li>
                <ul>
                  <li>write down notes, ask your neigbors<li>
                </ul>
              </ul>"
            transition={['slide']} >
            <Heading fit margin="-150px auto 150px">
              Learn by doing
            </Heading>
            <Appear><Text>Set up spreadsheet together</Text></Appear>
            <Appear><Text>Reveal concepts in context</Text></Appear>
          </Slide>


          <Slide
            id="background">
            <Heading size={2} fit caps>who am i?</Heading>
            <Appear><Heading size={1} textFont="secondary">Excel GOD</Heading></Appear>
          </Slide>


          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="secondary">
              Wait what?
            </Heading>
          </Slide>


          <Slide
            id="clarification">
            <Heading size={2} fit caps>who am i?</Heading>
            <Heading size={6} textColor="white">an</Heading>
            <Heading size={1}>Excel GOD</Heading>
            <Appear>
              <BlockQuote>
                <Cite>Will Harrison</Cite>
              </BlockQuote>
            </Appear>
          </Slide>


          <Slide
            id="example1">
            <Heading textColor="secondary">33</Heading>
          </Slide>


          <Slide
            id="example2">
            show example2 here
          </Slide>

          <Slide
            id="get-started" >
            <Heading fit caps size={1} >
              Let's get started
            </Heading>
          </Slide>

          <Slide bgColor="secondary"
            id="step1"
            transition={["fade"]} >
            <Heading size={2} textColor="primary">
              Open Excel
            </Heading>
            <Text textColor="tertiary">open new workbook</Text>
            <Appear>
              <Text textColor="tertiary">press ctrl-s (cmd-s)</Text>
            </Appear>
            <Appear>
              <BlockQuote textColor="tertiary">save as<Quote textColor="tertiary">{`${todaysDate}.ExcelTraining.xlsx`}</Quote>
                <Cite>Tip #1</Cite>
              </BlockQuote>
            </Appear>
          </Slide>


          <Slide
            id="data"
            transition={["fade"]}
            bgColor="tertiary"
            notes= "
              <ul>
                <li>workbook/worksheet</li>
                <li>cells</li>
                <li>rows</li>
                <li>columns</li>
              </ul>
              sort, filter, no reporting
            " >
            <Heading textColor="primary">
              Excel
            </Heading>
          </Slide>

          <Slide
            id="rule-1"
            transition={["fade"]}
            bgColor="tertiary"
            notes="" >
            <Heading textColor="primary">DATA</Heading>
            <Heading textFont="tertiary" textColor="secondary" fill>Rule #1</Heading>
            <Heading textFont="tertiary" textColor="secondary" caps fit>Excel is a data tool first</Heading>
            <Heading size={6} textColor="primary">Reporting comes later</Heading>
          </Slide>

          <Slide
            id="navigation"
            transition={["zoom", "fade"]}
            bgColor="secondary">
            <Heading caps fit>Navigation</Heading>
              <Heading textFont="tertiary" textColor="primary" fill>Rule #2</Heading>
              <Heading textFont="tertiary" textColor="primary" caps fill fit>Your mouse is LAVA, don't touch it</Heading>
              <Appear>
                <Heading size={9} textColor="tertiary">sometimes it's ok, but not very often</Heading>
              </Appear>
          </Slide>

          <Slide
            id="shortcuts" >
            <Heading size={3}>Shortcuts</Heading>
            <Appear>
              <Heading textColor="secondary" size={1}>♥</Heading>
            </Appear>
          </Slide>



          <Slide transition={["zoom"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="sql"
              source={require("raw!../assets/deck.example")}
              margin="-200px auto"
            />
          </Slide>


          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Reporting
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={2} caps fit textColor="secondary">
                Formatting
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="primary">
                Aggregation
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={6} textColor="tertiary">
                Sexy
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Name
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Age
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Years in Sandpoint
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textColor="tertiary">Will, this is a message from the future. Run.</Quote>
              <Cite textColor="tertiary">Will Harrison</Cite>
            </BlockQuote>
          </Slide>


          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1.5} textFont="tertiary" textColor="secondary">
              Made with love in Sandpoint by
            </Heading>
            <Image width="100%" src={images.logo}/>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
