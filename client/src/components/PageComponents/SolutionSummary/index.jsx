import React from 'react';
import Radar from 'react-d3-radar';

export default function SolutionSummary()
{
    return(
        <div class="solution-summary">
            <div className="title">
                <h2>Peace of Land</h2>
            </div>
            <div className="summary">
                <h4>At a glance</h4>
                <p>Solution type: Food Forest</p>
                <p>Primary domain: Services</p>
                <p>Legal entity: Cooperative (Private Limited Company)</p>
                <p>Operational area: Very small</p>
                <p>Climate zone: Temperature</p>
                <p>City type: Rural</p>
                <p>Founded: 1800</p>
                <p>Economic network: N/A</p>
                <p>Other networks: N/A</p>
                <p>Basic description: Urban gardening project with focus on permaculture</p>
            </div>
            <div className="chart">
            <Radar
                width={500}
                height={500}
                padding={70}
                domainMax={10}
                highlighted={null}
                onHover={(point) => {
                    if (point) {
                    console.log('hovered over a data point');
                    } else {
                    console.log('not over anything');
                    }
                }}
                data={{
                    variables: [
                    {key: 'resilience', label: 'Product'},
                    {key: 'strength', label: 'Environmental'},
                    {key: 'adaptability', label: 'Social'},
                    {key: 'creativity', label: 'Management'},
                    {key: 'openness', label: 'Economics'},
                    {key: 'confidence', label: 'Ownership'},
                    ],
                    sets: [
                    {
                        key: 'me',
                        label: 'My Scores',
                        values: {
                        resilience: 4,
                        strength: 6,
                        adaptability: 7,
                        creativity: 2,
                        openness: 8,
                        confidence: 1,
                        },
                    },
                    {
                        key: 'everyone',
                        label: 'Everyone',
                        values: {
                        resilience: 10,
                        strength: 8,
                        adaptability: 6,
                        creativity: 4,
                        openness: 2,
                        confidence: 0,
                        },
                    },
                    ],
                }}
                />
            </div>
        </div>
    );
}