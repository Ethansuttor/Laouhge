----------------------------------------------------------------------------------
-- Company: 
-- Engineer: 
-- 
-- Create Date: 04/17/2025 12:13:24 AM
-- Design Name: 
-- Module Name: ten_bit_counter - Behavioral
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


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_ARITH.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity ten_bit_counter is
    Port (
        clk        : in  STD_LOGIC; 
        rst_async  : in  STD_LOGIC;  
        preset     : in  STD_LOGIC;  
        up_down    : in  STD_LOGIC;  
        preset_val : in  STD_LOGIC_VECTOR(9 downto 0);
        count_out  : out STD_LOGIC_VECTOR(9 downto 0) 
    );
end ten_bit_counter;

architecture Behavioral of ten_bit_counter is
    signal count : STD_LOGIC_VECTOR(9 downto 0) := (others => '0');
begin

    process(clk, rst_async)
    begin 
        if rst_async = '1' then
            count <= (others => '0');

        elsif rising_edge(clk) then
            if preset = '1' then
               if preset_val > "1111101000" then  -- 1000 in binary
    count <= "1111101000";         -- force to 1000
else
    count <= preset_val;
end if;

            else
                if up_down = '0' then  
    if count = 1000 then
        count <= (others => '0');  
    else
        count <= count + 1;
    end if;
else  -- Counting down
    if count = 0 then
        count <= "1111101000"; 
    else
        count <= count - 1;
    end if;
end if;

            end if;
        end if;
    end process;

    count_out <= count;

end Behavioral;
