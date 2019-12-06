import groupByDay from './groupPerDay';

describe('groupByDay', () => {
    it('should aggregate posts by day', () => {
        const posts = [
            { createdAt: '2019-01-05T12:56:31.039Z', content: 'test1' },
            { createdAt: '2019-01-05T09:12:43.456Z', content: 'test2' },
            { createdAt: '2019-01-04T12:34:56.789Z', content: 'test3' },
        ];
        expect(groupByDay(posts)).toEqual({
            days: ['2019-01-04T23:00:00.000Z', '2019-01-03T23:00:00.000Z'],
            postsByDay: {
                '2019-01-04T23:00:00.000Z': [
                    {
                        createdAt: '2019-01-05T12:56:31.039Z',
                        content: 'test1',
                    },
                    {
                        createdAt: '2019-01-05T09:12:43.456Z',
                        content: 'test2',
                    },
                ],
                '2019-01-03T23:00:00.000Z': [
                    {
                        createdAt: '2019-01-04T12:34:56.789Z',
                        content: 'test3',
                    },
                ],
            },
        });
    });
});
