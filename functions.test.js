
const {
    ageClassification,
    weekFn
    
} = require('./functions.js');

describe("ageClassification: age classification for all ranges", () => {

    test("ageClassification: age < 0 = null", () => {
        expect(ageClassification(-1)).toBeNull();
    });

    test("ageClassification: age < 0 = null", () => {
        expect(ageClassification(0)).toBeNull();
    });

    test("ageClassification: age < 24 = 'Дитинство'", () => {
        expect(ageClassification(0)).toBe('Дитинство');
    });

    test("ageClassification: age < 24 = 'Дитинство'", () => {
        expect(ageClassification(24)).toBe('Дитинство');
    });

    test("ageClassification: age < 44 = 'Молодість'", () => {
        expect(ageClassification(24.01)).toBe('Молодість');
    });

    test("ageClassification: age < 44 = 'Молодість'", () => {
        expect(ageClassification(44)).toBe('Молодість');
    });

    test("ageClassification: age < 65 = 'Зрілість'", () => {
        expect(ageClassification(44.01)).toBe('Зрілість');
    });

    test("ageClassification: age < 65 = 'Зрілість'", () => {
        expect(ageClassification(65)).toBe('Зрілість');
    });

    test("ageClassification: age < 75 = 'Старість'", () => {
        expect(ageClassification(65.01)).toBe('Старість');
    });

    test("ageClassification: age < 75 = 'Старість'", () => {
        expect(ageClassification(75)).toBe('Старість');
    });

    test("ageClassification: age < 90 = 'Довголіття'", () => {
        expect(ageClassification(75.01)).toBe('Довголіття');
    });

    test("ageClassification: age < 90 = 'Довголіття'", () => {
        expect(ageClassification(90)).toBe('Довголіття');
    });

    test("ageClassification: age < 120 = 'Рекорд'", () => {
        expect(ageClassification(90.01)).toBe('Рекорд');
    });

    test("ageClassification: age < 120 = 'Рекорд'", () => {
        expect(ageClassification(122)).toBe('Рекорд');
    });

    test("ageClassification: age > 120 = null", () => {
        expect(ageClassification(122.01)).toBeNull();
    });
    
    test("ageClassification: age > 120 = null", () => {
        expect(ageClassification(155)).toBeNull();
    });

});


describe("weekFn: Validating Day of the Week Output", () => {

    test("weekFn:Day of the Week 'Понеділок'=1", () => {
        expect(weekFn(1)).toBe('Понеділок');
    });

    test("weekFn:Day of the Week 'Вівторок'=2", () => {
        expect(weekFn(2)).toBe('Вівторок');
    });

    test("weekFn:Day of the Week 'Середа'=3", () => {
        expect(weekFn(3)).toBe('Середа');
    });

    test("weekFn:Day of the Week 'Четвер'=4", () => {
        expect(weekFn(4)).toBe('Четвер');
    });

    test("weekFn:Day of the Week 'П\'ятниця'=5", () => {
        expect(weekFn(5)).toBe('П\'ятниця');
    });

    test("weekFn:Day of the Week 'Субота'=6", () => {
        expect(weekFn(6)).toBe('Субота');
    });

    test("weekFn:Day of the Week 'Неділя'=7", () => {
        expect(weekFn(7)).toBe('Неділя');
    });

    test("weekFn:Any number will be null", () => {
        expect(weekFn(9)).toBeNull();
    });

    test("weekFn:Any number will be null", () => {
        expect(weekFn(1.5)).toBeNull();
    });

    test("weekFn:Any number will be null", () => {
        expect(weekFn('2')).toBeNull();
    });
    
});