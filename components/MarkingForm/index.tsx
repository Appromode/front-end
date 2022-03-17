/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import { object, number, SchemaOf } from 'yup';
import { Field } from 'formik';
import { MarkingFormWrapper, FormikStep } from '../MarkingFormWrapper';
import Marks from '../../types/marks';

const MarkingForm: FC = () => {
  const initialValues = {
    taskDifficulty: 0,
    technicalAchievements: 0,
    technicalContributions: 0,
    projectContributions: 0,
    teamworkSkills: 0,
    criticalReflection: 0,
  };

  const validationSchema: SchemaOf<Marks> = object().shape({
    taskDifficulty: number().required('You need to select a mark'),
    technicalAchievements: number().required('You need to select a mark'),
    technicalContributions: number().required('You need to select a mark'),
    projectContributions: number().required('You need to select a mark'),
    teamworkSkills: number().required('You need to select a mark'),
    criticalReflection: number().required('You need to select a mark'),
  });

  return (
    <MarkingFormWrapper
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      <FormikStep label="Number1">
        <div>
          <h1 className="pt-2 font-bold text-lg text-[#05345C]">
            Intrinsic difficulty and scope of tasks attempted by student
          </h1>
          <p className="pt-3 font-bold text-md ml-3">Well below expectation</p>
          <label>
            <Field name="taskDifficulty" type="radio" value="0" className="ml-3" />
            <div className="ml-3 inline-block">
              None or trivial
            </div>
          </label>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="15" className="ml-3" />
              <div className="ml-3 inline-block">
                Small tasks not requiring knowledge from course
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="25" className="ml-3" />
              <div className="ml-3 inline-block">
                Basic tasks, minimal course knowledge
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Below</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="35" className="ml-3" />
              <div className="ml-3 inline-block">
                Insufficient to show necessary competence
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Third</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="45" className="ml-3" />
              <div className="ml-3 inline-block">
                Straightforward; involves application of knowledge and skills from course
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.2</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="50" className="ml-3" />
              <div className="ml-3 inline-block">
                Largely straightforward but requires some new learning
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.1</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="60" className="ml-3" />
              <div className="ml-3 inline-block">
                Some elements challenging; requires new learning and good understanding
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">First Class</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="70" className="ml-3" />
              <div className="ml-3 inline-block">
                Substantial challenge; highly complex; must gain advanced knowledge
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Beyond First</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="80" className="ml-3" />
              <div className="ml-3 inline-block">
                Challenge and scope in top 5% of projects
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Well Beyond</p>
          <div className="form-group">
            <label>
              <Field name="taskDifficulty" type="radio" value="90" className="ml-3" label="" />
              <div className="ml-3 inline-block">
                Challenge and scope in top 1% of projects
              </div>
            </label>
          </div>
        </div>
      </FormikStep>

      <FormikStep label="Number2">
        <div>
          <div className="form-group">
            <h1 className="pt-2 font-bold text-lg text-[#05345C]">
              Quality of technical achievements and contributions
            </h1>
            <p className="pt-3 font-bold text-md ml-3">Well below expectation</p>
            <label>
              <Field name="technicalAchievements" type="radio" value="0" className="ml-3" />
              <div className="ml-3 inline-block">
                None or trivial
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="15" className="ml-3" />
              <div className="ml-3 inline-block">
                Very poor; shows little understanding
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="25" className="ml-3" />
              <div className="ml-3 inline-block">
                Poor; a little progress but standard low
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Below</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="35" className="ml-3" />
              <div className="ml-3 inline-block">
                Unsatisfactory but some understanding shown
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Third</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="45" className="ml-3" />
              <div className="ml-3 inline-block">
                Fair but pedestrian attempt; shows basic competence
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.2</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="50" className="ml-3" />
              <div className="ml-3 inline-block">
                Competent attempt at straightforward tasks
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.1</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="60" className="ml-3" />
              <div className="ml-3 inline-block">
                Good attempt at all tasks; able to cope with difficulties
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">First Class</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="70" className="ml-3" />
              <div className="ml-3 inline-block">
                Demonstrated initiative and creative problem-solving ability
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Beyond First</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="80" className="ml-3" />
              <div className="ml-3 inline-block">
                c.f. experienced professional
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Well Beyond</p>
          <div className="form-group">
            <label>
              <Field name="technicalAchievements" type="radio" value="90" className="ml-3" />
              <div className="ml-3 inline-block">
                c.f. top professional
              </div>
            </label>
          </div>
        </div>
      </FormikStep>

      <FormikStep label="Number3">
        <div>
          <div className="form-group">
            <h1 className="pt-2 font-bold text-lg text-[#05345C]">Quantity of technical contributions</h1>
            <p className="pt-3 font-bold text-md ml-3">Well below expectation</p>
            <label>
              <Field name="technicalContributions" type="radio" value="0" className="ml-3" />
              <div className="ml-3 inline-block">
                None or trivial
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="15" className="ml-3" />
              <div className="ml-3 inline-block">
                A few small contributions
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="25" className="ml-3" />
              <div className="ml-3 inline-block">
                Patchy with key tasks neglected
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Below</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="35" className="ml-3" />
              <div className="ml-3 inline-block">
                Attempted several tasks but insufficient
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Third</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="45" className="ml-3" />
              <div className="ml-3 inline-block">
                Modest but adequate contribution overall
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.2</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="50" className="ml-3" />
              <div className="ml-3 inline-block">
                Satisfactory contribution across most tasks throughout project
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.1</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="60" className="ml-3" />
              <div className="ml-3 inline-block">
                Solid contribution across all tasks and throughout project
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">First Class</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="70" className="ml-3" />
              <div className="ml-3 inline-block">
                Consistently strong contribution across all tasks and throughout project
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Beyond First</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="80" className="ml-3" />
              <div className="ml-3 inline-block">
                Highly industrious and productive
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Well Beyond</p>
          <div className="form-group">
            <label>
              <Field name="technicalContributions" type="radio" value="90" className="ml-3" />
              <div className="ml-3 inline-block">
                Exceptionally industrious and productive
              </div>
            </label>
          </div>
        </div>
      </FormikStep>

      <FormikStep label="Number4">
        <div>
          <div className="form-group">
            <h1 className="pt-2 font-bold text-lg text-[#05345C]">Contributions to project process</h1>
            <p className="pt-3 font-bold text-md ml-3">Well below expectation</p>
            <label>
              <Field name="projectContributions" type="radio" value="0" className="ml-3" />
              <div className="ml-3 inline-block">
                None or trivial
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="15" className="ml-3" />
              <div className="ml-3 inline-block">
                A few small contributions of very poor quality
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="25" className="ml-3" />
              <div className="ml-3 inline-block">
                Some contributions but quality poor
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Below</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="35" className="ml-3" />
              <div className="ml-3 inline-block">
                Unsatisfactory but some understanding shown
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Third</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="45" className="ml-3" />
              <div className="ml-3 inline-block">
                Modest but adequate contribution; shows basic competence
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.2</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="50" className="ml-3" />
              <div className="ml-3 inline-block">
                Competent attempt at basic process tasks throughout project
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.1</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="60" className="ml-3" />
              <div className="ml-3 inline-block">
                Good attempt at process tasks; able to adapt when difficulties arise
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">First Class</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="70" className="ml-3" />
              <div className="ml-3 inline-block">
                Managed a major area of the process very effectively and documented it well
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Beyond First</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="80" className="ml-3" />
              <div className="ml-3 inline-block">
                c.f. experienced professional
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Well Beyond</p>
          <div className="form-group">
            <label>
              <Field name="projectContributions" type="radio" value="90" className="ml-3" />
              <div className="ml-3 inline-block">
                c.f. top professional
              </div>
            </label>
          </div>
        </div>
      </FormikStep>

      <FormikStep label="Number5">
        <div>
          <div className="form-group">
            <h1 className="pt-2 font-bold text-lg text-[#05345C]">Teamwork and related skills</h1>
            <p className="pt-3 font-bold text-md ml-3">Well below expectation</p>
            <label>
              <Field name="teamworkSkills" type="radio" value="0" className="ml-3" />
              <div className="ml-3 inline-block">
                Rarely in contact
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="15" className="ml-3" />
              <div className="ml-3 inline-block">
                Mostly unreliable or out of touch
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="25" className="ml-3" />
              <div className="ml-3 inline-block">
                Coordination patchy
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Below</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="35" className="ml-3" />
              <div className="ml-3 inline-block">
                Sometimes unreliable or out of touch
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Third</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="45" className="ml-3" />
              <div className="ml-3 inline-block">
                Adequate but needed prompting from other team members
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.2</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="50" className="ml-3" />
              <div className="ml-3 inline-block">
                Coordinated with others reasonably well most of the time
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.1</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="60" className="ml-3" />
              <div className="ml-3 inline-block">
                Integrated well and willing to help others when they needed assistance
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">First Class</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="70" className="ml-3" />
              <div className="ml-3 inline-block">
                Integrated well and proactively supported other team members
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Beyond First</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="80" className="ml-3" />
              <div className="ml-3 inline-block">
                Made pivotal contribution to success of team
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Well Beyond</p>
          <div className="form-group">
            <label>
              <Field name="teamworkSkills" type="radio" value="90" className="ml-3" />
              <div className="ml-3 inline-block">
                Energised team so they surpassed themselves
              </div>
            </label>
          </div>
        </div>
      </FormikStep>

      <FormikStep label="Number6">
        <div>
          <div className="form-group">
            <h1 className="pt-2 font-bold text-lg text-[#05345C]">Critical reflection</h1>
            <p className="pt-3 font-bold text-md ml-3">Well below expectation</p>
            <label>
              <Field name="criticalReflection" type="radio" value="0" className="ml-3" />
              <div className="ml-3 inline-block">
                None or trivial
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="15" className="ml-3" />
              <div className="ml-3 inline-block">
                Largely inaccurate or irrelevant
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="25" className="ml-3" />
              <div className="ml-3 inline-block">
                Often inaccurate or entirely one sided
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Below</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="35" className="ml-3" />
              <div className="ml-3 inline-block">
                Partly inaccurate or largely one sided
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Third</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="45" className="ml-3" />
              <div className="ml-3 inline-block">
                Aware of some of the major strengths and weaknesses
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.2</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="50" className="ml-3" />
              <div className="ml-3 inline-block">
                Aware of most major strengths and weaknesses but lacks insight
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">2.1</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="60" className="ml-3" />
              <div className="ml-3 inline-block">
                Appreciates strengths and weaknesses; offers a few insights
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">First Class</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="70" className="ml-3" />
              <div className="ml-3 inline-block">
                Understands strengths and weaknesses; offers useful insights
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Beyond First</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="80" className="ml-3" />
              <div className="ml-3 inline-block">
                Deep understanding with many useful insights
              </div>
            </label>
          </div>
          <p className="pt-3 font-bold text-md ml-3">Well Beyond</p>
          <div className="form-group">
            <label>
              <Field name="criticalReflection" type="radio" value="90" className="ml-3" />
              <div className="ml-3 inline-block">
                ...plus good insight into solutions and future work
              </div>
            </label>
          </div>
        </div>
      </FormikStep>
    </MarkingFormWrapper>
  );
};

export default MarkingForm;
