----------------------------------------------------------------------------------
-- Company: 
-- Engineer: 
-- 
-- Create Date: 04/17/2025 12:16:32 AM
-- Design Name: 
-- Module Name: top_counter_system - Behavioral
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


-- Top-Level Module for 10-bit Up/Down Counter System

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_ARITH.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity top_counter_system is
    Port (
        clk         : in  STD_LOGIC; 
        btnc        : in  STD_LOGIC;
        sw          : in  STD_LOGIC_VECTOR(15 downto 0); 
        seg         : out STD_LOGIC_VECTOR(6 downto 0); 
        an          : out STD_LOGIC_VECTOR(3 downto 0); 
        led         : out STD_LOGIC_VECTOR(9 downto 0) 

    );
end top_counter_system;

architecture Behavioral of top_counter_system is

    -- Internal signals
    signal debounced_clk : STD_LOGIC;
    signal counter_out    : STD_LOGIC_VECTOR(9 downto 0);
    signal bcd_out        : STD_LOGIC_VECTOR(15 downto 0); 

   
    component debouncer
        Port (
            clk     : in  STD_LOGIC;
            btn_in  : in  STD_LOGIC;
            btn_out : out STD_LOGIC
        );
    end component;

    component ten_bit_counter
        Port (
            clk        : in  STD_LOGIC;
            rst_async  : in  STD_LOGIC;
            preset     : in  STD_LOGIC;
            up_down    : in  STD_LOGIC;
            preset_val : in  STD_LOGIC_VECTOR(9 downto 0);
            count_out  : out STD_LOGIC_VECTOR(9 downto 0)
        );
    end component;

    component bin_to_bcd
        Port (
            bin_in  : in  STD_LOGIC_VECTOR(9 downto 0);
            bcd_out : out STD_LOGIC_VECTOR(15 downto 0)
        );
    end component;

    component ssd_driver
        Port (
            clk     : in  STD_LOGIC;
            bcd_in  : in  STD_LOGIC_VECTOR(15 downto 0);
            seg     : out STD_LOGIC_VECTOR(6 downto 0);
            an      : out STD_LOGIC_VECTOR(3 downto 0)
        );
    end component;

begin

  
    u_debouncer: debouncer
        Port map (
            clk     => clk,
            btn_in  => btnc,
            btn_out => debounced_clk
        );

    u_counter: ten_bit_counter
        Port map (
            clk        => debounced_clk,
            rst_async  => sw(15),
            preset     => sw(14),
            up_down    => sw(13),
            preset_val => sw(9 downto 0),
            count_out  => counter_out
        );

    u_bcd: bin_to_bcd
        Port map (
            bin_in  => counter_out,
            bcd_out => bcd_out
        );

  u_ssd: ssd_driver
      Port map (
      clk    => clk,
      bcd_in => bcd_out,
       seg    => seg,
       an     => an
      );

    led <= counter_out;

end Behavioral;
