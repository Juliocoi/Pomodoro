import { HandPalm, Play } from "phosphor-react";
import { createContext, useState } from "react";
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { NewCycleForm } from "./Components/NewCycleForm/NewCycleForm";
import { Countdown } from "./Components/Countdown/Countdown";

interface iCycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface iCyclesContextType {
  activeCycle: iCycle | undefined
  activeCycleId: string | null
  markCurrentClycleAsFinished: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CyclesContext = createContext({ } as iCyclesContextType);

export function Home() {
  const [cycles, setClycles] = useState<iCycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentClycleAsFinished(){
    setClycles(state =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );
  }

  // function handleCreateNewCycle(data: iNewCycleFormData) {
  //   const newCycle: iCycle = {
  //     id: String(new Date().getTime()),
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date()
  //   };

  //   setClycles((state) => [...state, newCycle]);
  //   setActiveCycleId(newCycle.id);
  //   // reseta a qntdade de segundo passado no ciclo anterior ao criar um novo. 
  //   setAmountSecondsPassed(0);

  //   reset();
  // };

  function handleInterruptCycle() {
    setClycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  // const task = watch('task'); // usado para desativar o botão "submit" em StartCountDownButton

  return (
    <HomeContainer>
      <form /*onSubmit={handleSubmit(handleCreateNewCycle)} */ action="">
        <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCurrentClycleAsFinished }}>
          {/* <NewCycleForm /> */}
          <Countdown />
        </CyclesContext.Provider>
        {/* controla exibição dos botões Play/Stop */}
        {
          activeCycle ? (
            <StopCountDownButton onClick={handleInterruptCycle} type="button">
              <HandPalm size={24} />
              Interromper
            </StopCountDownButton>
          ) : (
            <StartCountDownButton /*disabled={!task}*/ type="submit">
              <Play size={24} />
              Começar
            </StartCountDownButton>
          )
        }

      </form>
    </HomeContainer>
  );
}
