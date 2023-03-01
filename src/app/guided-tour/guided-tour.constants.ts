export const Constants = {
    Steps: [
        {
            selector: 'stats-card-1-guided-tour-selector',
            classToAdd: 'guided-tour-selector',
            title: 'Real Time Statistics',
            content: 'These cards will tell you about the real time statistics that you have for the dashboard.',
            right: '-23vw',
            top: 'unset',
        },
        {
            selector: 'search-guided-tour-selector',
            classToAdd: 'guided-tour-selector',
            title: 'Search feature',
            content: 'You can click on this icon to search for a specific feature that you are looking for.',
            right: 'unset',
            top: '7vh',
        },
        {
            selector: 'stats-card-2-guided-tour-selector',
            classToAdd: 'guided-tour-selector',
            title: 'Real Time Data',
            content: 'These cards will provide you the real time graph for your data.',
            right: '-23vw',
            top: 'unset',
        },
    ],
    NullStep: {
        stepCount: -1,
        selector: null,
        classToAdd: null,
        title: '',
        content: '',
        right: 'unset',
        top: 'unset'    
    },
    OverlayId: 'tourOverlay',
    ButtonLabels: {
        Skip: 'Skip',
        End: 'End',
        Next: 'Next'
    }
}
