import { grading } from './grading';
describe('grading', () => {
  it('grading does get F grade', () => {
    expect(grading(15,15,15)).toEqual("F");
  });
   it('grading does get D  grade', () => {
    expect(grading(20,15,15)).toEqual("D");
  });
   it('grading does get D+ grade' , () => {
    expect(grading(20,20,15)).toEqual("D+");
  });
  it('grading does get C grade', () => {
    expect(grading(20,20,20)).toEqual("C");
  });
   it('grading does get C+  grade', () => {
    expect(grading(25,20,20)).toEqual("C+");
  });
   it('grading does get B grade' , () => {
    expect(grading(25,25,20)).toEqual("B");
  });
  it('grading does get B+ grade', () => {
    expect(grading(25, 25, 25)).toEqual("B+");
  });
   it('grading does get A grade' , () => {
    expect(grading(25, 25,30)).toEqual("A");
  });
});
