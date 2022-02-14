export default function() {
    this.namespace = '/api';

    this.get('/studentdetails', function() {
        return {
            data: [{
                    type: 'studentdetails',
                    id: 1,
                    attributes: {
                        register: 1,
                        first: 'Aarthi',
                        last: 'N',
                        phone: 8903841274,
                        year: 4,
                        city: 'Namakkal'
                    }
                },
                {
                    type: 'studentdetails',
                    id: 2,
                    attributes: {
                        register: 2,
                        first: 'Barani',
                        last: 'R',
                        phone: 947841274,
                        year: 4,
                        city: 'Erode'
                    }
                },
                {
                    type: 'studentdetails',
                    id: 3,
                    attributes: {
                        register: 3,
                        first: 'Charu',
                        last: 'L',
                        phone: 76373841274,
                        year: 4,
                        city: 'Salem'
                    }
                }
            ]
        }
    })
}