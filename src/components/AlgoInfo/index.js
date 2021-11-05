import React from 'react'
import './style.css'


function AlgoInfo({
    algorithm,
    description,
    worstCase,
    avgCase,
    bestCase,
    space
}) {
    return (
        <div className="AlgoInfo">
            <div className="AlgoInfo___title">
                <h1 style={{textAlign: 'left'}}>{algorithm ? algorithm : 'Select Algorithm'}</h1>
            </div>

            <div className="AlgoInfo__main">
                <article className="AlgoInfo__Article">
                    {description ? (
                        description
                    ) : (
                    <p>
                    You must select an algorithm before you can 
                    visualize it's execution on an array of numbers.
                    </p>
                    )}
                </article>

                <aside className="AlgoInfo__Aside">
                    <h3>Performance</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Worst-case time complexity</td>
                                <td>
                                <code>{worstCase}</code>
                                </td>
                            </tr>

                            <tr>
                                <td>Average time complexity</td>
                                <td>
                                <code>{avgCase}</code>
                                </td>
                            </tr>

                            <tr>
                                <td>Best-case time complexity</td>
                                <td>
                                <code>{bestCase}</code>
                                </td>
                            </tr>

                            <tr>
                                <td>Worst-case space complexity</td>
                                <td>
                                <code>{space}</code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    )
}

export default AlgoInfo;
