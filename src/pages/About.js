import React from "react";
import { Link } from "react-router-dom";
import {Row,Col,Card,CardTitle,Icon} from 'react-materialize';

function About(){


    return(
        <>
                    <Row>
            <Col
                m={6}
                s={12}
            >
                <Card
                actions={[
                    <a key="1" href="http://ansarmirzayi.ir">This is a Link</a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
                >
                Here is the standard card with an image thumbnail.
                </Card>
            </Col>
            </Row>
          <Link to='/' >Go Home~</Link>
        </>
    )
}
export default About;