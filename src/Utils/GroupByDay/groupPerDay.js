const sortByDate = (a, b) => new Date(b).valueOf() - new Date(a).valueOf();

const getDayForPost = post => {
    const date = new Date(post.createdAt);
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date.toISOString();
};

const groupByDay = posts => {
    const groups = posts.reduce((days, post) => {
        const day = getDayForPost(post);
        if (!days[day]) {
            days[day] = [];
        }
        days[day] = days[day].concat(post);
        return days;
    }, {});
    return {
        days: Object.keys(groups).sort(sortByDate),
        postsByDay: groups,
    };
};

export default groupByDay;
