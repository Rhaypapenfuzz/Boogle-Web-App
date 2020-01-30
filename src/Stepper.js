import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


export function StepperComponent() {

	const steps = ["Start", "Game", "Results"];
	return (
	<div>
		<Stepper activeStep={0}>
			{steps.map(label => (
				<Step key={label}>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	</div>
	);
}
export default StepperComponent;
