----------------------------------------------------------------------------------
-- Company: 
-- Engineer: 
-- 
-- Create Date: 04/17/2025 12:18:33 AM
-- Design Name: 
-- Module Name: debouncer - Behavioral
-- Project Name: 
-- Target Devices: 
-- Tool Versions: 
-- Description: 
-- 
-- Dependencies: 
-- 
-- Revision:
-- Revision 0.01 - File Created
-- Additional Comments:
-- 
----------------------------------------------------------------------------------


-- Debouncer Module for Button Clock Signal

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity debouncer is
    Port (
        clk     : in  STD_LOGIC;   
        btn_in  : in  STD_LOGIC;  
        btn_out : out STD_LOGIC  
    );
end debouncer;

architecture Behavioral of debouncer is
    signal shift_reg : STD_LOGIC_VECTOR(15 downto 0) := (others => '0');
    signal debounced : STD_LOGIC := '0';
begin

    process(clk)
    begin
        if rising_edge(clk) then
            shift_reg <= shift_reg(14 downto 0) & btn_in;
            if shift_reg = X"FFFF" then
                debounced <= '1';
            elsif shift_reg = X"0000" then
                debounced <= '0';
            end if;
        end if;
    end process;

    btn_out <= debounced;

end Behavioral;
