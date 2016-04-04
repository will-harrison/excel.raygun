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
  waitWhat: require("../assets/waitWhat.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  example1: require("../assets/std.png"),
  exampleMd1: require("../assets/md1.png"),
  exampleMd2: require("../assets/md2.png"),
  exampleMd3: require("../assets/md3wha.png"),
  exampleMdfinal: require("../assets/mdFinal.png")
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
            <Image src={images.waitWhat.replace("/", "")} margin="0px auto 40px" height="293px"/>
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
            id="example1"
            bgImage={images.example1.replace("/", "")} >
          </Slide>


          <Slide
            id="example2"
            bgImage={images.exampleMd1.replace("/", "")} >
          </Slide>

          <Slide
            id="example3"
            bgImage={images.exampleMd2.replace("/", "")} >
          </Slide>

          <Slide
            id="example4"
            bgImage={images.exampleMd3.replace("/", "")} >
          </Slide>

          <Slide
            id="example5"
            bgImage={images.exampleMdfinal.replace("/", "")} >
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
              <BlockQuote textColor="tertiary">save as<Quote textColor="tertiary">{`${todaysDate}.ExcelTraining`}</Quote>
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
            !!!start building data here!!!
            " >
            <Heading textColor="primary">
              Excel
            </Heading>
            <Appear>
              <BlockQuote><Quote>name headers to represent data</Quote>
                <Cite>Tip #2</Cite>
              </BlockQuote>
            </Appear>
            <Appear>
              <BlockQuote>double click tab<Quote>rename 'Sheet1' to 'data'</Quote>
                <Cite>Tip #3</Cite>
              </BlockQuote>
            </Appear>
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



          <Slide id="shortcuts-detail" transition={["zoom"]} bgColor="primary" >
            <CodePane
              lang="txt"
              source={require("raw!../assets/shortcuts")}
              margin="-200px auto"
            />
          </Slide>




          <Slide id="reporting-intro" transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary">
              Reporting
            </Heading>
            <Appear fid="4">
              <Heading size={2} caps fit textColor="secondary">
                Formatting
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Aggregation
              </Heading>
            </Appear>
          </Slide>

          <Slide id="basic-functions" transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1.5} textFont="tertiary" textColor="secondary">
              Basic functions
            </Heading>
            <Appear>
            <Heading size={6}>
              =42
              <Text>( or just 42 )</Text>
            </Heading>
            </Appear>
            <Appear>
            <Heading size={6}>
              =A1
            </Heading>
            </Appear>
            <Appear>
            <Heading size={6}>
              =sum(A:A)
            </Heading>
            </Appear>
            <Appear>
            <Heading size={6}>
              =min(A:A)
            </Heading>
            </Appear>
            <Appear>
            <Heading size={6}>
              =average(A:A)
            </Heading>
            </Appear>
            <Appear>
            <Heading size={6}>
              =max(A:A)
            </Heading>
            </Appear>
            <Appear>
            <Heading size={6}>
              =A1/sum(A:A)
            </Heading>
            </Appear>
          </Slide>

          <Slide
            id="rule-3"
            transition={["zoom", "fade"]}
            bgColor="secondary">
            <Heading caps fit>Basic formatting</Heading>
            <Heading textFont="tertiary" textColor="primary" fill>Rule #3</Heading>
            <Heading textFont="tertiary" textColor="primary" caps fill fit>Merged cells are the devil</Heading>
          </Slide>



          <Slide
           bgColor="tertiary"
            id="basic-formatting"
            transition={["fade"]} >
              <Heading size={4} textColor="primary">
                expand columns
              </Heading>
            <Appear>
              <Heading size={4} textColor="primary">
                format headers
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="primary">
                format numbers
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="primary">
                copy/paste formats
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="primary">
                freeze panes
              </Heading>
            </Appear>
            <Appear>
              <BlockQuote>
                <Quote>use restraint when formatting, save it for the end</Quote>
                <Cite>Tip #4</Cite>
              </BlockQuote>
            </Appear>

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
