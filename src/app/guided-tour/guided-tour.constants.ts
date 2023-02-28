export const Constants = {
    Steps: [
        {
            selector: 'stats-card-1-guided-tour-selector',
            location: 'RIGHT',
            right: '-23vw',
            top: 'unset',
            classToAdd: 'guided-tour-selector',
            title: 'Real Time Statistics',
            content: 'These cards will tell you about the real time statistics that you have for the dashboard.'
        },
        {
            selector: 'notifications-guided-tour-selector',
            location: 'BOTTOM',
            right: 'unset',
            top: '7vh',
            classToAdd: 'guided-tour-selector',
            title: 'Notifications',
            content: 'You can click on this icon to stay updated about the notifications you might have received.'
        },
        {
            selector: 'stats-card-2-guided-tour-selector',
            location: 'RIGHT',
            right: '-23vw',
            top: 'unset',
            classToAdd: 'guided-tour-selector',
            title: 'Real Time Data',
            content: 'These cards will provide you the real time graph for your data.'
        },
    ],
    NullStep: {
        stepCount: -1,
        location: 'BOTTOM',
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
