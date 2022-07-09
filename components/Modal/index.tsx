import { ReactNode, useState } from "react";

interface ModalProps {
	children: ReactNode;
}

export function Modal({ children }: ModalProps) {
	return (
		<>
			<div
				id="defaultModal"
				tabIndex={-1}
				aria-hidden="true"
				className="overflow-y-auto overflow-x-hidden fixed flex items-center justify-center z-50 w-full md:inset-0 h-modal md:h-full bg-[#151a1ec9] "
			>
				<div className="relative z-0 w-full h-full backdrop-blur-sm" />
				<div className="fixed p-4 w-full max-w-2xl h-full md:h-auto z-90">
					<div className="relative bg-white rounded-lg dark:bg-[#1c2227] shadow-lg">
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
