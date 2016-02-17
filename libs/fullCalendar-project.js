/*Full calender*/
$('#calender-full').fullCalendar({
    header: {
        left: 'prev',
        center: 'title',
        right: 'next'
    },
    firstDay:1,
    events:[
        {
            title: 'Influencer Surname',
            start: '2016-02-16',
            className: "event-fc event-youtube"
        },
        {
            title: 'Influencer Surname',
            start: '2016-02-16',
            className: "event-fc event-instagram"
        },
        {
            title: 'Influencer Surname',
            start: '2016-02-16',
            className: "event-fc event-twitter"
        },

        {
            title: 'Influencer Surname',
            start: '2016-02-25',
            className: "event-fc event-badoo"
        },
        {
            title: 'Influencer Surname',
            start: '2016-02-25',
            className: "event-fc event-pinterest"
        },
        {
            title: 'Influencer Surname',
            start: '2016-02-25',
            className: "event-fc event-facebook"
        }


    ]
});
