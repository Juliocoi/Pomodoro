import { useForm } from "react-hook-form";
import { FormContainer, TaskInput, MinutesAmountInput } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export function NewCycleForm() {

  interface iNewCycleFormData {
    task: string
    minutesAmount: number
  }

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(5, "Informe um nome para o novo ciclo"),
    minutesAmount: zod.number().min(1).max(60, "intervalo inválido. Informe um número entre 5 e 60")
  });

  const { register, handleSubmit, watch, reset } = useForm<iNewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome ao seu projeto:"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}